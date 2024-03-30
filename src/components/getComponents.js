import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import GotoXY from "./motion/Goto";
import MoveY from "./motion/MoveY";
import SayMessage from "./look/SayMessage";
import SayMessageInTime from "./look/SayMessageInTime";

export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} />;
    case "MOVE":
      return <Move comp_id={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;

    case "GOTO_XY":
      return <GotoXY comp_id={id} />;
    case "SAY_MESSAGE":
      return <SayMessage comp_id={id}/>
    case "SAY_HELLO_MESSAGE_2_SECOND":
      return <SayMessageInTime comp_id={id}/>    
    default:
      return React.null;
  }
};
