import { getHealth } from '@/lib/api';

export default async function ApiStatus() {
  const health = await getHealth();

  return (
    <div className="meta-row">
      <span className="badge">{health.status}</span>
      {health.message ? <span className="muted">{health.message}</span> : null}
    </div>
  );
}
