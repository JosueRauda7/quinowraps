import WhatsappImage from './whatsapp-logo.png';

export default function WhatsappButton() {
  return (
    <a
      style={{
        position: 'fixed',
        bottom: '5px',
        right: '5px',
        zIndex: 1000,
      }}
      href="https://wa.me/50372920073"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={WhatsappImage}
        alt="WhatsApp"
        style={{ width: '80px', height: '80px' }}
      />
    </a>
  );
}