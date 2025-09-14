"use client";;
import React, { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 120 // Even larger grid boxes
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef(null);

  return (
    <DivGrid
      ref={ref}
      className={cn(
        "fixed top-0 left-0 w-screen h-screen z-0",
        "mask-radial-from-20% mask-radial-at-top opacity-600",
        "[--cell-border-color:rgba(30_41_59_0.12)] [--cell-fill-color:rgba(59_130_246_0.06)] [--cell-shadow-color:rgb(148_163_184)]",
        "dark:[--cell-border-color:rgba(30_41_59_0.32)] dark:[--cell-fill-color:rgba(0,0,0,0.10)] dark:[--cell-shadow-color:transparent]"
      )}
      rows={rows}
      cols={cols}
      cellSize={cellSize}
      borderColor="var(--cell-border-color)"
      fillColor="var(--cell-fill-color)"
      clickedCell={clickedCell}
      onCellClick={(row, col) => {
        setClickedCell({ row, col });
        setRippleKey((k) => k + 1);
      }}
      interactive
    />
  );
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(0,0,0,0.3)",
  clickedCell = null,
  onCellClick = () => { },
  interactive = true
}) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style = clickedCell
          ? {
            "--delay": `${delay}ms`,
            "--duration": `${duration}ms`,
          }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            } />
        );
      })}
    </div>
  );
};
