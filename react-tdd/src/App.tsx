function App() {
  return (
    <div
      className="form-control w-50
      sm:flex sm:justify-center sm:align-middle sm:w-80 sm:mx-auto sm:m-0
      md:flex md:justify-center md:align-middle md:w-30 md:mx-auto md:m-0
    "
    >
      <div className="input-group">
        <input type="text" placeholder="Search…" className="input input-bordered" />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App
