const HomeIcons = ({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string
  title: string
  description: string
}) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HomeIcons
