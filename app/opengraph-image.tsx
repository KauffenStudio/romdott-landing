import { ImageResponse } from 'next/og';

export const alt = "Roomdott — Find a roommate you'd actually enjoy living with";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F5F0E8',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 44, fontWeight: 700, color: '#2A2A2A', letterSpacing: '-0.02em' }}>
          roomdott.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              color: '#2A2A2A',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '900px',
            }}
          >
            Find a roommate you&apos;d actually&nbsp;
            <span style={{ color: '#C8704A', fontStyle: 'italic' }}>enjoy</span>&nbsp;living with.
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: 'rgba(42,42,42,0.6)' }}>
            Compatibility-matched roommates for students &amp; creatives across Europe.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', width: 14, height: 14, borderRadius: 7, backgroundColor: '#8B9B7E' }} />
          <div style={{ display: 'flex', fontSize: 24, color: 'rgba(42,42,42,0.6)' }}>
            Launching in Europe · Free during beta
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
