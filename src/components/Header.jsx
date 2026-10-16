import "../style/Header.css"

export default function Header() {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                            <use xlink:href="#bootstrap"></use>
                        </svg>
                        <span className="fs-4">Simple header</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    </ul>
                </header>
            </div>
            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Always expand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                        </ul>
                        <form role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}