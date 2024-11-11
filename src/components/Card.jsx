function Card({ obj }) {
  return (
    <figure>
      <img src={obj.img} alt={obj.altText} />
      <div>
        <h3>{obj.name}</h3>
        <ul>
          {obj.icons.map((icon) => (
            <li key={icon.icon}>
              <span className="text-3xl text-[#2cd2dd]">
                <ion-icon name={icon.icon}></ion-icon>
              </span>
              <span>{icon.definition}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export default Card;
