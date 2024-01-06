import errorImage from "/public/404.webp";

export default function Error() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center flex-column gap-3">
            <img src={errorImage} alt="404" />
            <h1>OOPS You Are in the wrong way</h1>
            <a href="/" className="btn btn-primary fs-5 ">Go to HomePage</a>
        </div>
    )
}
