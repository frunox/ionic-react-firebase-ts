import React from 'react';

import { Photo } from '../components/ImagePicker';

// type alias
export type MemoryType = 'good' | 'bad';

export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: MemoryType;
  base64Url: string;
}

const MemoriesContext = React.createContext<{
  memories: Memory[];
  addMemory: (photo: Photo, title: string, type: MemoryType) => void;
  initContext: () => void;
}>({
  memories: [],
  addMemory: () => {},
  initContext: () => {},
});

export default MemoriesContext;
