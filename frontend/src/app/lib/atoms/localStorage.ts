// utils/localStorage.ts

export const saveToLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  export const loadFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(key);
      return savedData ? JSON.parse(savedData) : null;
    }
    return null;
  };
  