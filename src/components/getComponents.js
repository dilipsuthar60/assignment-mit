import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import GotoXY from "./motion/Goto";
import MoveY from "./motion/MoveY";
import SayMessage from "./look/SayMessage";
import SayMessageInTime from "./look/SayMessageInTime";
import ThinkMessage from "./look/ThinkMessage";
import ThinkMessageInTime from "./look/thinkMessageInTime";

export const getComponent = (key, id) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY componentId={id} />;
    case "MOVE":
      return <Move componentId={id} />;

    case "TURN_CLOCKWISE":
      return <TurnClockwise componentId={id} />;

    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise componentId={id} />;

    case "GOTO_XY":
      return <GotoXY componentId={id} />;
    case "SAY_HELLO_MESSAGE":
      return <SayMessage componentId={id}/>
    case "SAY_HELLO_MESSAGE_SECOND":
      return <SayMessageInTime componentId={id}/>    
    case "THINK_HELLO_MESSAGE":
      return <ThinkMessage componentId={id}/>
    case "THINK_HELLO_MESSAGE_SECOND":
      return <ThinkMessageInTime componentId={id}/>
    default:
      return null;
  }
};
