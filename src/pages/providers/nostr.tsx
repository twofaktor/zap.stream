import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { StatePill } from "@/element/state-pill";
import { StreamProviderInfo, StreamProviderStore } from "@/providers";
import { NostrStreamProvider } from "@/providers/zsz";
import { StreamState } from "@/const";
import { DefaultButton } from "@/element/buttons";

export function ConfigureNostrType() {
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState<StreamProviderInfo>();
  const navigate = useNavigate();

  async function tryConnect() {
    try {
      const api = new NostrStreamProvider(new URL(url).host, url);
      const inf = await api.info();
      setInfo(inf);
    } catch (e) {
      console.error(e);
    }
  }

  function status() {
    if (!info) return;

    return (
      <>
        <h3>Status</h3>
        <div>
          <StatePill state={info?.state ?? StreamState.Ended} />
        </div>
        <div>
          <p>Name</p>
          <div className="paper">{info?.name}</div>
        </div>
        {info?.summary && (
          <div>
            <p>Summary</p>
            <div className="paper">{info?.summary}</div>
          </div>
        )}
        {info?.viewers && (
          <div>
            <p>Viewers</p>
            <div className="paper">{info?.viewers}</div>
          </div>
        )}
        {info?.version && (
          <div>
            <p>Version</p>
            <div className="paper">{info?.version}</div>
          </div>
        )}
        <div>
          <DefaultButton
            onClick={() => {
              StreamProviderStore.add(new NostrStreamProvider(new URL(url).host, url));
              navigate("/");
            }}>
            <FormattedMessage defaultMessage="Save" id="jvo0vs" />
          </DefaultButton>
        </div>
      </>
    );
  }

  return (
    <div className="owncast-config">
      <div className="flex flex-col gap-3">
        <div>
          <p>Nostr streaming provider URL</p>
          <div className="paper">
            <input type="text" placeholder="https://" value={url} onChange={e => setUrl(e.target.value)} />
          </div>
        </div>
        <DefaultButton onClick={tryConnect}>
          <FormattedMessage defaultMessage="Connect" id="+vVZ/G" />
        </DefaultButton>
      </div>
      <div>{status()}</div>
    </div>
  );
}
