import SedrickIcon from '../icons/SedrickIcon';

interface SedrickProps {
  message?: string | null;
}

export default function Sedrick({ message }: SedrickProps) {
  return (
    <div className="sedrick-container" title="Sedrick">
      {message && (
        <div className="sedrick-speech-bubble">
          <p>{message}</p>
        </div>
      )}
      <div style={{ opacity: message ? 1 : 0.65 }}>
        <SedrickIcon size={56} />
      </div>
    </div>
  );
}
