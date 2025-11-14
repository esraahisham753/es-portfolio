const Button = ({ name, isBeam, containerClass }) => {
  console.log(isBeam);
  return (
    <button className={`btn ${containerClass}`}>
        {
            isBeam && (
                <span className="relative flex w-3 h-3">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )
        }
        {name}
    </button>
  )
}

export default Button