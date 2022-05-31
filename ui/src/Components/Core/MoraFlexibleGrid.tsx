import React, {
  Component,
  Children,
  isValidElement,
  cloneElement,
  ReactNode
} from "react";

interface Props {
  windowWidth: number;
  gridBreakpoints: { screenSize: number; columns: number }[];
  gap: number;
  childElements: ReactNode[] | undefined;
  align?: string | null;
  justify?:
    | "stretch"
    | "start"
    | "center"
    | "end"
    | "around"
    | "between"
    | "evenly"
    | undefined;
}

const MoraFlexibleGrid = (props: Props) => {

  const sortBreakpoints = (breakpoints: { screenSize: number; columns: number }[]) => {
    breakpoints.sort((a, b) => b.screenSize - a.screenSize);
    return [
      breakpoints.map((breakpoint) => breakpoint.screenSize),
      breakpoints.map((column) => column.columns),
    ];
  }

  let gap = props.gap + "px";
  let columnWidth: string | null = null;
  let gridBreakpoints = props.gridBreakpoints;
  let [breakpoints, columns] = sortBreakpoints(gridBreakpoints);

  for (let i = 0; i < breakpoints.length; i++) {
    if (breakpoints[i] <= props.windowWidth) {
      columnWidth = ((1 / columns[i]) * 100).toFixed(2) + "%";
      break;
    }
  }

  const gridItems = Children.toArray(props.childElements);

  const container_styles = {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "stretch",
    width: "100%",
    flexDirection: 'row',
    gap: gap,
    justifyContent: props.justify ? props.justify : "around"
  } as const;

  const grid_item_styles = {
    width: (columnWidth == null) ? "100%" : `calc(${columnWidth} - ${gap})`,
    alignItems: props.align ? props.align : "start"
  }as const;

  return (
    <div style={container_styles}>
      {Children.map(gridItems, (gridItem, index) => {
        return (
          isValidElement(gridItem) && (
            <div style={grid_item_styles}>
              {gridItem}
            </div>
          )
        );
      })}
    </div>
  );
}

export default MoraFlexibleGrid