import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoIcon from "@mui/icons-material/Info";
function Top() {
  return (
    <div>
      <div className="flex my-5 justify-between items-center">
        <ArrowBackIosIcon className="cursor-pointer" />
        <div className="flex items-center justify-center gap-3">
          <img
            src="/photo.jpg"
            alt="profilepic"
            className="w-9 h-9 rounded-full object-cover"
          />

          <h3>Prashant Timilsina</h3>
        </div>
        <InfoIcon className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Top;
