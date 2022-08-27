function Advertisement(props) {
  return (
    <div>
      <a href={props.url}>
        <img src={props.img} alt='' />
      </a>
    </div>
  );
}

export default Advertisement;