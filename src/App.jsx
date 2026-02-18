import { useState, useEffect } from 'react';
import Container from "./components/Container";
import './App.css';

// 1. Juste les valeurs de base, pas de compteurs ici
const VALEURS_CARTES = ["A", "B", "C", "D", "E", "F"];

function App() {
  const [jeu, setJeu] = useState([]);
  const [selection, setSelection] = useState([]);
  const [resolues, setResolues] = useState([]);

  useEffect(() => {
    const paires = [...VALEURS_CARTES, ...VALEURS_CARTES];

    const jeuMelange = paires
      .sort(() => Math.random() - 0.5)
      .map((valeur, index) => ({
        id: index,
        valeur: valeur
      }));

    setJeu(jeuMelange);
  }, []);

  const handleChoix = (index) => {
    if (selection.length < 2 && !selection.includes(index) && !resolues.includes(index)) {
      setSelection((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (selection.length === 2) {
      const [idx1, idx2] = selection;
      if (jeu[idx1].valeur === jeu[idx2].valeur) {
        setResolues(prev => [...prev, idx1, idx2]);
        setSelection([]);
      } else {
        const timer = setTimeout(() => setSelection([]), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [selection, jeu]);

  return (
    <div className="grille">
      {jeu.map((carte, index) => (
        <Container key={carte.id} valeur={carte.valeur} estDevoilee={selection.includes(index) || resolues.includes(index)} onCliquer={() => handleChoix(index)}/>
      ))}
    </div>
  );
}

export default App;