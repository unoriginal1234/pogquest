import SedrickIcon from '../icons/SedrickIcon';

interface SedrickProps {
  message?: string | null;
  onDismiss?: () => void;
}

export default function Sedrick({ message, onDismiss }: SedrickProps) {
  return (
    <div className="sedrick-container" title="Sedrick">
      {message && (
        <div className="sedrick-speech-bubble">
          <button className="sedrick-bubble-close" onClick={onDismiss} aria-label="Close">&times;</button>
          <p>{message}</p>
        </div>
      )}
      <div style={{ opacity: message ? 1 : 0.65 }}>
        <SedrickIcon size={56} />
      </div>
    </div>
  );
}
