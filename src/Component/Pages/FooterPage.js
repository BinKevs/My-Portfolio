import React from "react";

class FooterPage extends React.Component {
  render() {
    return (
      <>
        <div class=" bg-black mx-auto px-6">
          <div class=" flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-lg text-gray-700 font-bold mb-2">
                © 2022 by Kevin Bryan Buenaseda
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterPage;
