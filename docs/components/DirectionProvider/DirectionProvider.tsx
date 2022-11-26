import React, { useContext, createContext } from 'react';

interface DirectionContextProps {
  dir: 'rtl' | 'ltr';
  toggleDirection(): void;
}

export const DirectionContext = createContext<DirectionContextProps>({
  dir: 'ltr',
  toggleDirection: () => {},
});

export function useDirection() {
  return useContext(DirectionContext);
}

interface DirectionProviderProps extends DirectionContextProps {
  children: React.ReactNode;
}

export function DirectionProvider({ dir, toggleDirection, children }: DirectionProviderProps) {
  return (
    <DirectionContext.Provider value={{ dir, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}
