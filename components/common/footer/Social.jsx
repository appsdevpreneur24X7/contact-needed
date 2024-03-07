const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
    { id: 2, liveLink: "https://www.twitter.com/", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/", icon: "fa-instagram" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id} style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`} style={{ fontWeight: '600', color: '#fff', fontSize: '15px' }}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
