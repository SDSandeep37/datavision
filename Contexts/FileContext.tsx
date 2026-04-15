"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FileContextTypes = {
  fileId: string | null;
  setFileId: (id: string | null) => void;
};

const FileContext = createContext<FileContextTypes | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [fileId, setFileIdState] = useState<string | null>(null);

  // Load fileId from session storage if exist
  useEffect(() => {
    const storedFileId = sessionStorage.getItem("fileId");
    if (storedFileId) setFileIdState(storedFileId);
  }, []);

  // Sync the fileId to sessionStorage when its changes
  const setFileId = (id: string | null) => {
    if (id) {
      sessionStorage.setItem("fileId", id);
    } else {
      sessionStorage.removeItem("fileId");
    }

    setFileIdState(id);
  };

  return (
    <FileContext.Provider value={{ fileId, setFileId }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const ctx = useContext(FileContext);
  if (!ctx) {
    throw new Error("useFileContext must be within provider");
  }
  return ctx;
};
