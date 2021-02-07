import './WarningBanner.css'

const WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="Warning">
      Message: {props.message}
    </div>
  );
}

export default WarningBanner