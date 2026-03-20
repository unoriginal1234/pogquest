import SedrickIcon from '../icons/SedrickIcon';

export default function Sedrick() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        opacity: 0.65,
        pointerEvents: 'none',
        zIndex: 1,
      }}
      title="Sedrick"
    >
      <SedrickIcon size={56} />
    </div>
  );
}
