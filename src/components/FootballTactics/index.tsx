import { useState } from "react";
import { Stage, Layer, Image, Circle, Line } from "react-konva";
import useImage from "use-image";
import { Button } from "@mui/material";

const FIELD_IMAGE = "https://dungcutheduc.vn/images/Kich-thuoc-san-bong-da-Futsal.jpg";

const FootballTactics = () => {
  const [fieldImage] = useImage(FIELD_IMAGE);
  const [players, setPlayers] = useState([]);
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState(null);

  const addPlayer = (team) => {
    setPlayers([
      ...players,
      { id: players.length, x: 100, y: 100, team, color: team === "blue" ? "blue" : "red" },
    ]);
  };

  const startDrawing = () => setIsDrawing(true);

  const handleMouseDown = (e) => {
    if (!isDrawing) return;
    const { x, y } = e.target.getStage().getPointerPosition();
    setCurrentLine({ points: [x, y], color: "yellow" });
  };

  const handleMouseMove = (e) => {
    if (!isDrawing || !currentLine) return;
    const { x, y } = e.target.getStage().getPointerPosition();
    setCurrentLine((prev) => ({ ...prev, points: [...prev.points, x, y] }));
  };

  const handleMouseUp = () => {
    if (currentLine) {
      setLines([...lines, currentLine]);
      setCurrentLine(null);
    }
    setIsDrawing(false);
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
        <Button variant="contained" color="primary" onClick={() => addPlayer("blue")}>
          Thêm cầu thủ xanh
        </Button>
        <Button variant="contained" color="secondary" onClick={() => addPlayer("red")}>
          Thêm cầu thủ đỏ
        </Button>
        <Button variant="contained" onClick={startDrawing}>
          Vẽ chiến thuật
        </Button>
      </div>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          <Image image={fieldImage} width={window.innerWidth} height={window.innerHeight} />
        </Layer>
        <Layer>
          {players.map((player) => (
            <Circle key={player.id} x={player.x} y={player.y} radius={15} fill={player.color} draggable />
          ))}
          {lines.map((line, index) => (
            <Line key={index} points={line.points} stroke={line.color} strokeWidth={3} tension={0.5} lineCap="round" />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default FootballTactics;