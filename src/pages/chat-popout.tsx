import "./chat-popout.css";
import { LiveChat } from "element/live-chat";
import { useParams } from "react-router-dom";
import { parseNostrLink } from "@snort/system";
import useEventFeed from "../hooks/event-feed";

export function ChatPopout() {
  const params = useParams();
  const link = parseNostrLink(params.id!);
  const { data: ev } = useEventFeed(link, true);

  return (
    <div className="popout-chat">
      <LiveChat
        ev={ev}
        link={link}
        options={{
          canWrite: false,
          showHeader: false,
        }}
      />
    </div>
  );
}
