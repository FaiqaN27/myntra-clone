const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger spinner" style={{ width: '4rem', height: '4rem' }} role="status">
            </div>
        </div>

    )
}

export default LoadingSpinner;