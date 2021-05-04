import React, { useState, useEffect, useCallback } from 'react';
import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { base64FromPath } from '@ionic/react-hooks/filesystem';

import MemoriesContext, { Memory, MemoryType } from './memories-context';
import { Photo } from '../components/ImagePicker';

const { Storage, Filesystem } = Plugins;

const MemoriesContextProvider: React.FC = (props) => {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    console.log('2. In MCP useEffect # of memories', memories.length);
    const storableMemories = memories.map((memory) => {
      console.log('in MCP useEffect map', memory.title);
      return {
        id: memory.id,
        title: memory.title,
        imagePath: memory.imagePath,
        type: memory.type,
      };
    });
    Storage.set({ key: 'memories', value: JSON.stringify(storableMemories) });
    console.log('3. After Storage.set, memories.length', memories.length);
  }, [memories]);

  const addMemory = async (photo: Photo, title: string, type: MemoryType) => {
    const fileName = new Date().getTime() + '.jpeg';
    const base64 = await base64FromPath(photo.preview);
    Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: FilesystemDirectory.Data,
    });

    const newMemory: Memory = {
      id: Math.random().toString(),
      title,
      type,
      imagePath: fileName,
      base64Url: base64,
    };
    setMemories((curMemories) => {
      return [...curMemories, newMemory];
    });
  };

  const initContext = useCallback(async () => {
    console.log('### starting MCP initContext');
    const memoriesData = await Storage.get({ key: 'memories' });

    const storedMemories = memoriesData.value
      ? JSON.parse(memoriesData.value)
      : [];
    console.log(
      '4. in initContext, storedMemories',
      JSON.stringify(storedMemories)
    );
    const loadedMemories: Memory[] = [];
    for (const storedMemory of storedMemories) {
      const file = await Filesystem.readFile({
        path: storedMemory.imagePath,
        directory: FilesystemDirectory.Data,
      });
      console.log('5. in MCP initContext for loop', storedMemory.title);
      loadedMemories.push({
        id: storedMemory.id,
        title: storedMemory.title,
        type: storedMemory.type,
        imagePath: storedMemory.imagePath,
        base64Url: 'data:image/jpeg;base64,' + file.data,
      });
    }
    setMemories(loadedMemories);
  }, []);

  return (
    <MemoriesContext.Provider
      value={{
        memories,
        addMemory,
        initContext,
      }}
    >
      {props.children}
    </MemoriesContext.Provider>
  );
};

export default MemoriesContextProvider;
