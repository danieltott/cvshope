export default function FloatyBox({ caption, children }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg">
      {caption ? (
        <>
          <div className="rounded-t-lg px-4 py-4 ">{children}</div>
          <div className="relative bg-gray-100 border-t border-gray-200 text-gray-600 rounded-b-lg py-5 px-6 sm:py-5 sm:px-10 font-light italic leading-6 text-center">
            {caption}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  )
}
