import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function JoinRedirect() {
  const router = useRouter();
  const { placeId, jobId } = router.query;

  useEffect(() => {
    if (placeId && jobId) {
      const robloxLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;
      window.location.href = robloxLink;
    }
  }, [placeId, jobId]);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '3em' }}>
      <h2>Redirecting you to Roblox...</h2>
      <p>If nothing happens, make sure you have Roblox installed.</p>
    </div>
  );
}