'use client'
import { useState, useEffect } from 'react';
import { WindowSizeType } from './types';

// Hook
export default function GetWindowSize() {
  // Initialisiere den Zustand mit undefinierter Breite/Höhe, damit die Server- und Client-Renderings übereinstimmen
  // Erfahre mehr hier: [4](https://joshwcomeau.com/react/the-perils-of-rehydration/)
  const [windowSize, setWindowSize] = useState<WindowSizeType | undefined>();

  // Handler, der bei Fenstergrößenänderung aufgerufen wird
  function handleResize() {
    // Setze die Fensterbreite/-höhe in den Zustand
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // Führe nur den gesamten Code unten auf der Client-Seite aus
    if (typeof window !== 'undefined') {

      // Füge einen Event-Listener hinzu
      window.addEventListener("resize", handleResize);

      // Rufe den Handler sofort auf, damit der Zustand mit der anfänglichen Fenstergröße aktualisiert wird
      handleResize();

      // Entferne den Event-Listener bei der Bereinigung
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Leeres Array stellt sicher, dass der Effekt nur beim Mount ausgeführt wird

  return windowSize;
}
