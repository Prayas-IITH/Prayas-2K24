function Donate () {
    return (
        <div className="bg-yellow-50 min-h-screen flex flex-col items-center justify-center space-y-8">
          <div className="bg-gray-200 w-64 h-64 flex items-center justify-center rounded-lg">
            <span className="text-lg font-bold">QR Code</span>
          </div>
          <div className="bg-gray-200 w-96 p-6 rounded-lg text-center">
            <p className="text-lg font-bold">Bank account number: XYZ</p>
            <p className="text-lg font-bold">Phonepe number: XXXXXXXXXX</p>
          </div>
        </div>
      );
}

export default Donate