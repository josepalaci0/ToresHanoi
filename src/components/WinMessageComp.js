const WinMessageComp = ({ moveCount }) => {
  const message = (
    <div className="win-message">
      ¡Has ganado!
      <div className="win-subtitle">
        Completaste el juego en <span className="win-number">{moveCount}</span>{" "}
        movimientos.
      </div>
    </div>
  );
  return message;
};

export default WinMessageComp;
