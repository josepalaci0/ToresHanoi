import React, { useEffect, useState } from "react";
import GameOptionsComp from "./components/GameOptionsComp";
import TowerComp from "./components/TowerComp";
import WinMessageComp from "./components/WinMessageComp";
import Tower from "./utils/Tower";
import "./App.css";

const App = () => {
  //Contar el numero de movimientos
  const [moveCount, setMoveCount] = useState(0);
  //El disco que se está movimiendo
  const [dragTile, setDragTile] = useState();
  //Los discos para la torre principal
  const [disks, setDisks] = useState(3);

  //Los discos de cada torre (1, 2, 3)
  const [tiles, setTiles] = useState([]);
  const [tilesTwo, setTilesTwo] = useState([]);
  const [tilesThree, setTilesThree] = useState([]);

  //Las 3 torres (columnas)
  let [towerOne, setTowerOne] = useState(new Tower());
  let [towerTwo, setTowerTwo] = useState(new Tower());
  let [towerThree, setTowerThree] = useState(new Tower());

  const towers = {
    1: {
      tower: towerOne
    },
    2: {
      tower: towerTwo
    },
    3: {
      tower: towerThree
    }
  };

  useEffect(() => {
    //Resetear las torres
    reset(); // Actualizar el primer render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disks]);

  //Actualizar todos los discos de las torres
  //Esta actualización se hará con cada movimiento de las torres
  useEffect(() => {
    setTiles(towerOne.disks.traverse());
  }, [towerOne]);

  useEffect(() => {
    setTilesTwo(towerTwo.disks.traverse());
  }, [towerTwo]);

  useEffect(() => {
    setTilesThree(towerThree.disks.traverse());
  }, [towerThree]);

  const reset = () => {
    //COMPLETAR
    towerOne = new Tower();
    towerTwo = new Tower();
    towerThree = new Tower();
    if (disks > 0) {
      for (let i = disks; i > 0; i--) {
        towerOne.add(i);
      }
    }

    setTowerOne(towerOne);
    setTowerTwo(towerTwo);
    setTowerThree(towerThree);
    setMoveCount(0);
  };

  const handleDrag = (e, tile, id) => {
    //Funcion que se lanza cada vez que movemos un disco que se encuentra en la parte superior de una torre
    const dragTile = { tile, towerId: id };
    if (towers[id].tower.disks.top === dragTile.tile) {
      setDragTile(dragTile);
    } else {
      e.preventDefault();
    }
  };

  //Actualizar los discos de las torres
  const updateTitles = () => {
    setTiles(towerOne.disks.traverse());
    setTilesTwo(towerTwo.disks.traverse());
    setTilesThree(towerThree.disks.traverse());
  };

  const handleDrop = (e) => {
    //Funcion que se lanza cada vez que un disco se deja en una nueva torre
    const dropColumn = e.currentTarget.id; //ID de la columna de destino
    let source = towers[dragTile.towerId].tower; //Torre de origen
    let destination = towers[dropColumn].tower; //Torre de destino

    const goodMove = source.moveTopTo(destination, setMoveCount, moveCount); //Mover el disco desde la torre de origen al destino
    if (goodMove) {
      //Si es un movimiento valido -> incrementar los movimientos
      setMoveCount((prevState) => prevState + 1); //Actualizar los movimientos
      updateTitles(); //Actualizar los discos de la torre 3
    }
  };

  const solve = () => {
    //COMPLETAR
    if (towerThree.disks.length === disks) {
    } else {
      towerOne.moveDisks(disks, towerThree, towerTwo);
      updateTitles();
    }
  };

  const winCondition = tiles.length === 0 && tilesTwo.length === 0; //COMPLETAR
  const home = (
    <>
      <div className="container">
        <h1>TORRES DE HANOI ACADEMLO</h1>
        <div className="content">
          <TowerComp
            id={1}
            disks={tiles}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <TowerComp
            id={2}
            disks={tilesTwo}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <TowerComp
            id={3}
            disks={tilesThree}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <GameOptionsComp
            disks={disks}
            setDisks={setDisks}
            reset={reset}
            solve={solve}
          />
        </div>
        {winCondition && <WinMessageComp moveCount={moveCount} />}
        Movimientos: {moveCount}
      </div>
    </>
  );
  return home;
};

export default App;
