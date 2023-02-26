import React from "react";
import { girl, logo, wave } from "../assets";

const Hero = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <img src={logo} alt="logo" className="nav-logo" />
          {/* <svg
            className="nav-logo"
            width="330"
            height="78"
            viewBox="0 0 330 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.3889 62.6853L76.7874 46.9948L43.1143 4.52087L3.44565 46.4079L78.3889 62.6853Z"
              className="accent1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.3889 76V65.4883H0V76H78.3889Z"
              className="accent1"
            />
            <path
              d="M117.963 60.6364H120.52C120.402 57.3445 117.366 54.8835 113.147 54.8835C108.971 54.8835 105.69 57.3125 105.69 60.9773C105.69 63.9176 107.821 65.6648 111.23 66.6449L113.914 67.4119C116.216 68.0511 118.261 68.8608 118.261 71.0341C118.261 73.4205 115.96 74.9972 112.934 74.9972C110.335 74.9972 108.034 73.8466 107.821 71.375H105.093C105.349 74.9545 108.247 77.3835 112.934 77.3835C117.963 77.3835 120.818 74.6136 120.818 71.0767C120.818 66.9858 116.94 65.6648 114.681 65.0682L112.466 64.4716C110.846 64.0455 108.247 63.1932 108.247 60.8494C108.247 58.7614 110.164 57.2273 113.062 57.2273C115.704 57.2273 117.707 58.4844 117.963 60.6364ZM137.019 57.5256H143.879V77H146.521V57.5256H153.382V55.1818H137.019V57.5256ZM184.828 55.1818V69.4148C184.828 72.6108 182.633 74.9119 178.99 74.9119C175.346 74.9119 173.152 72.6108 173.152 69.4148V55.1818H170.51V69.6278C170.51 74.1023 173.855 77.3835 178.99 77.3835C184.125 77.3835 187.47 74.1023 187.47 69.6278V55.1818H184.828ZM212.529 77C219.177 77 222.927 72.8665 222.927 66.0483C222.927 59.2727 219.177 55.1818 212.827 55.1818H205.796V77H212.529ZM208.438 74.6562V57.5256H212.657C217.771 57.5256 220.37 60.7642 220.37 66.0483C220.37 71.375 217.771 74.6562 212.359 74.6562H208.438ZM243.051 55.1818H240.409V77H243.051V55.1818ZM279.807 66.0909C279.807 59.1875 275.759 54.8835 270.177 54.8835C264.594 54.8835 260.546 59.1875 260.546 66.0909C260.546 72.9943 264.594 77.2983 270.177 77.2983C275.759 77.2983 279.807 72.9943 279.807 66.0909ZM277.25 66.0909C277.25 71.7585 274.14 74.8267 270.177 74.8267C266.213 74.8267 263.103 71.7585 263.103 66.0909C263.103 60.4233 266.213 57.3551 270.177 57.3551C274.14 57.3551 277.25 60.4233 277.25 66.0909ZM309.232 60.6364H311.788C311.671 57.3445 308.635 54.8835 304.416 54.8835C300.24 54.8835 296.959 57.3125 296.959 60.9773C296.959 63.9176 299.089 65.6648 302.499 66.6449L305.183 67.4119C307.484 68.0511 309.53 68.8608 309.53 71.0341C309.53 73.4205 307.229 74.9972 304.203 74.9972C301.604 74.9972 299.303 73.8466 299.089 71.375H296.362C296.618 74.9545 299.516 77.3835 304.203 77.3835C309.232 77.3835 312.087 74.6136 312.087 71.0767C312.087 66.9858 308.209 65.6648 305.95 65.0682L303.734 64.4716C302.115 64.0455 299.516 63.1932 299.516 60.8494C299.516 58.7614 301.433 57.2273 304.331 57.2273C306.973 57.2273 308.976 58.4844 309.232 60.6364Z"
              className="accent1"
            />
            <path
              d="M123.035 8.066C125.103 8.066 126.795 8.37933 128.111 9.006C129.458 9.60133 130.649 10.3063 131.683 11.121C132.31 11.591 132.78 11.6537 133.093 11.309C133.438 10.933 133.673 10.0713 133.798 8.724H134.879C134.816 9.946 134.769 11.45 134.738 13.236C134.707 15.022 134.691 17.372 134.691 20.286H133.61C133.485 18.8133 133.281 17.5287 132.999 16.432C132.748 15.3353 132.372 14.364 131.871 13.518C131.37 12.672 130.649 11.92 129.709 11.262C128.988 10.6667 128.174 10.2123 127.265 9.899C126.388 9.55433 125.479 9.382 124.539 9.382C122.816 9.382 121.359 9.86767 120.168 10.839C119.009 11.779 118.069 13.0323 117.348 14.599C116.659 16.1343 116.157 17.8577 115.844 19.769C115.562 21.649 115.421 23.5447 115.421 25.456C115.421 27.3987 115.578 29.3257 115.891 31.237C116.204 33.117 116.706 34.8247 117.395 36.36C118.116 37.8953 119.071 39.133 120.262 40.073C121.453 40.9817 122.91 41.436 124.633 41.436C125.542 41.436 126.435 41.2793 127.312 40.966C128.221 40.6527 129.035 40.1983 129.756 39.603C131.135 38.663 132.059 37.441 132.529 35.937C133.03 34.4017 133.391 32.412 133.61 29.968H134.691C134.691 33.0073 134.707 35.467 134.738 37.347C134.769 39.1957 134.816 40.7467 134.879 42H133.798C133.673 40.6527 133.453 39.8067 133.14 39.462C132.858 39.1173 132.372 39.1643 131.683 39.603C130.524 40.4177 129.286 41.1383 127.97 41.765C126.685 42.3603 125.025 42.658 122.988 42.658C119.573 42.658 116.565 41.9843 113.964 40.637C111.395 39.2897 109.389 37.347 107.948 34.809C106.538 32.271 105.833 29.216 105.833 25.644C105.833 22.1347 106.569 19.064 108.042 16.432C109.515 13.8 111.536 11.7477 114.105 10.275C116.706 8.80233 119.682 8.066 123.035 8.066ZM144.605 42.329C142.506 42.329 140.97 41.7807 139.999 40.684C139.059 39.556 138.589 38.2087 138.589 36.642C138.589 35.326 138.887 34.245 139.482 33.399C140.109 32.5217 140.908 31.8167 141.879 31.284C142.85 30.7513 143.869 30.3127 144.934 29.968C145.999 29.592 147.018 29.2317 147.989 28.887C148.96 28.511 149.744 28.1037 150.339 27.665C150.934 27.195 151.232 26.5997 151.232 25.879V21.978C151.232 21.2887 151.122 20.6463 150.903 20.051C150.715 19.4243 150.355 18.923 149.822 18.547C149.321 18.1397 148.616 17.936 147.707 17.936C147.143 17.936 146.595 18.0143 146.062 18.171C145.529 18.3277 145.059 18.5783 144.652 18.923C145.655 19.2677 146.391 19.7847 146.861 20.474C147.362 21.1633 147.613 21.931 147.613 22.777C147.613 23.9363 147.206 24.8607 146.391 25.55C145.608 26.208 144.668 26.537 143.571 26.537C142.38 26.537 141.456 26.161 140.798 25.409C140.171 24.657 139.858 23.7483 139.858 22.683C139.858 21.743 140.093 20.9597 140.563 20.333C141.033 19.675 141.722 19.0797 142.631 18.547C143.54 18.0143 144.636 17.6227 145.921 17.372C147.206 17.1213 148.569 16.996 150.01 16.996C151.483 16.996 152.83 17.1527 154.052 17.466C155.305 17.748 156.371 18.3277 157.248 19.205C157.937 19.9257 158.376 20.803 158.564 21.837C158.752 22.871 158.846 24.187 158.846 25.785V38.475C158.846 39.2583 158.909 39.8067 159.034 40.12C159.191 40.402 159.426 40.543 159.739 40.543C160.052 40.543 160.334 40.4647 160.585 40.308C160.836 40.1513 161.071 39.979 161.29 39.791L161.807 40.59C161.118 41.154 160.303 41.5927 159.363 41.906C158.423 42.188 157.405 42.329 156.308 42.329C154.365 42.329 153.065 41.953 152.407 41.201C151.749 40.449 151.404 39.5873 151.373 38.616C150.652 39.7753 149.744 40.684 148.647 41.342C147.55 42 146.203 42.329 144.605 42.329ZM148.788 38.945C149.258 38.945 149.681 38.851 150.057 38.663C150.464 38.4437 150.856 38.0833 151.232 37.582V27.806C150.887 28.4013 150.433 28.9183 149.869 29.357C149.305 29.7643 148.725 30.2187 148.13 30.72C147.566 31.19 147.08 31.7853 146.673 32.506C146.297 33.2267 146.109 34.1823 146.109 35.373C146.109 36.6577 146.36 37.582 146.861 38.146C147.394 38.6787 148.036 38.945 148.788 38.945ZM181.144 16.996C182.522 16.996 183.619 17.1683 184.434 17.513C185.28 17.8577 185.922 18.2963 186.361 18.829C186.862 19.4243 187.222 20.192 187.442 21.132C187.692 22.072 187.818 23.341 187.818 24.939V37.629C187.818 38.945 188.021 39.838 188.429 40.308C188.867 40.778 189.604 41.013 190.638 41.013V42C190.011 41.9687 189.071 41.9373 187.818 41.906C186.596 41.8433 185.405 41.812 184.246 41.812C182.961 41.812 181.723 41.8433 180.533 41.906C179.342 41.9373 178.449 41.9687 177.854 42V41.013C178.731 41.013 179.342 40.778 179.687 40.308C180.031 39.838 180.204 38.945 180.204 37.629V22.683C180.204 21.9623 180.125 21.3513 179.969 20.85C179.812 20.3173 179.546 19.9257 179.17 19.675C178.794 19.393 178.261 19.252 177.572 19.252C176.475 19.252 175.535 19.675 174.752 20.521C173.968 21.3357 173.577 22.3853 173.577 23.67V37.629C173.577 38.945 173.749 39.838 174.094 40.308C174.438 40.778 175.049 41.013 175.927 41.013V42C175.331 41.9687 174.47 41.9373 173.342 41.906C172.214 41.8433 171.07 41.812 169.911 41.812C168.626 41.812 167.341 41.8433 166.057 41.906C164.772 41.9373 163.801 41.9687 163.143 42V41.013C164.177 41.013 164.897 40.778 165.305 40.308C165.743 39.838 165.963 38.945 165.963 37.629V22.777C165.963 21.367 165.759 20.333 165.352 19.675C164.944 18.9857 164.208 18.641 163.143 18.641V17.654C164.145 17.748 165.117 17.795 166.057 17.795C167.467 17.795 168.798 17.748 170.052 17.654C171.336 17.5287 172.511 17.3563 173.577 17.137V20.944C174.329 19.5027 175.347 18.4843 176.632 17.889C177.948 17.2937 179.452 16.996 181.144 16.996ZM198.352 42.329C196.253 42.329 194.717 41.7807 193.746 40.684C192.806 39.556 192.336 38.2087 192.336 36.642C192.336 35.326 192.634 34.245 193.229 33.399C193.856 32.5217 194.655 31.8167 195.626 31.284C196.597 30.7513 197.616 30.3127 198.681 29.968C199.746 29.592 200.765 29.2317 201.736 28.887C202.707 28.511 203.491 28.1037 204.086 27.665C204.681 27.195 204.979 26.5997 204.979 25.879V21.978C204.979 21.2887 204.869 20.6463 204.65 20.051C204.462 19.4243 204.102 18.923 203.569 18.547C203.068 18.1397 202.363 17.936 201.454 17.936C200.89 17.936 200.342 18.0143 199.809 18.171C199.276 18.3277 198.806 18.5783 198.399 18.923C199.402 19.2677 200.138 19.7847 200.608 20.474C201.109 21.1633 201.36 21.931 201.36 22.777C201.36 23.9363 200.953 24.8607 200.138 25.55C199.355 26.208 198.415 26.537 197.318 26.537C196.127 26.537 195.203 26.161 194.545 25.409C193.918 24.657 193.605 23.7483 193.605 22.683C193.605 21.743 193.84 20.9597 194.31 20.333C194.78 19.675 195.469 19.0797 196.378 18.547C197.287 18.0143 198.383 17.6227 199.668 17.372C200.953 17.1213 202.316 16.996 203.757 16.996C205.23 16.996 206.577 17.1527 207.799 17.466C209.052 17.748 210.118 18.3277 210.995 19.205C211.684 19.9257 212.123 20.803 212.311 21.837C212.499 22.871 212.593 24.187 212.593 25.785V38.475C212.593 39.2583 212.656 39.8067 212.781 40.12C212.938 40.402 213.173 40.543 213.486 40.543C213.799 40.543 214.081 40.4647 214.332 40.308C214.583 40.1513 214.818 39.979 215.037 39.791L215.554 40.59C214.865 41.154 214.05 41.5927 213.11 41.906C212.17 42.188 211.152 42.329 210.055 42.329C208.112 42.329 206.812 41.953 206.154 41.201C205.496 40.449 205.151 39.5873 205.12 38.616C204.399 39.7753 203.491 40.684 202.394 41.342C201.297 42 199.95 42.329 198.352 42.329ZM202.535 38.945C203.005 38.945 203.428 38.851 203.804 38.663C204.211 38.4437 204.603 38.0833 204.979 37.582V27.806C204.634 28.4013 204.18 28.9183 203.616 29.357C203.052 29.7643 202.472 30.2187 201.877 30.72C201.313 31.19 200.827 31.7853 200.42 32.506C200.044 33.2267 199.856 34.1823 199.856 35.373C199.856 36.6577 200.107 37.582 200.608 38.146C201.141 38.6787 201.783 38.945 202.535 38.945ZM233.716 16.996C236.097 16.996 238.071 17.983 239.638 19.957C241.236 21.8997 242.035 24.9077 242.035 28.981C242.035 32.365 241.533 35.0753 240.531 37.112C239.559 39.1173 238.243 40.543 236.583 41.389C234.953 42.235 233.152 42.658 231.178 42.658C230.018 42.658 228.937 42.517 227.935 42.235C226.963 41.953 226.07 41.436 225.256 40.684L225.867 40.214C226.368 40.7153 226.932 41.0913 227.559 41.342C228.185 41.5613 228.796 41.671 229.392 41.671C230.99 41.671 232.165 40.6997 232.917 38.757C233.7 36.783 234.092 33.8063 234.092 29.827C234.092 27.101 233.935 24.9703 233.622 23.435C233.34 21.8997 232.917 20.8187 232.353 20.192C231.82 19.534 231.178 19.205 230.426 19.205C229.454 19.205 228.561 19.5967 227.747 20.38C226.963 21.132 226.54 22.166 226.478 23.482L226.384 21.508C227.01 20.004 227.966 18.876 229.251 18.124C230.535 17.372 232.024 16.996 233.716 16.996ZM226.525 5.246V41.577C225.616 41.295 224.692 41.1853 223.752 41.248C222.812 41.2793 221.95 41.436 221.167 41.718C220.383 41.9687 219.757 42.3133 219.287 42.752L218.582 42.329C218.738 41.8903 218.832 41.4517 218.864 41.013C218.895 40.5743 218.911 40.1357 218.911 39.697V10.886C218.911 9.476 218.707 8.442 218.3 7.784C217.924 7.09466 217.187 6.75 216.091 6.75V5.763C217.093 5.857 218.065 5.904 219.005 5.904C220.446 5.904 221.793 5.857 223.047 5.763C224.3 5.63767 225.459 5.46533 226.525 5.246ZM261.388 16.996C262.453 16.996 263.299 17.231 263.926 17.701C264.553 18.1397 265.007 18.7193 265.289 19.44C265.571 20.1293 265.712 20.8187 265.712 21.508C265.712 22.7927 265.336 23.8267 264.584 24.61C263.863 25.3933 262.908 25.785 261.717 25.785C260.464 25.785 259.508 25.503 258.85 24.939C258.192 24.3437 257.863 23.5603 257.863 22.589C257.863 21.6177 258.067 20.8187 258.474 20.192C258.913 19.5653 259.445 19.0327 260.072 18.594C259.602 18.5313 259.148 18.594 258.709 18.782C258.02 18.9387 257.409 19.299 256.876 19.863C256.343 20.3957 255.92 21.0223 255.607 21.743C255.325 22.4323 255.184 23.153 255.184 23.905V37.159C255.184 38.663 255.513 39.6813 256.171 40.214C256.86 40.7467 257.941 41.013 259.414 41.013V42C258.693 41.9687 257.628 41.9373 256.218 41.906C254.808 41.8433 253.351 41.812 251.847 41.812C250.5 41.812 249.137 41.8433 247.758 41.906C246.411 41.9373 245.408 41.9687 244.75 42V41.013C245.784 41.013 246.505 40.778 246.912 40.308C247.351 39.838 247.57 38.945 247.57 37.629V22.777C247.57 21.367 247.366 20.333 246.959 19.675C246.552 18.9857 245.815 18.641 244.75 18.641V17.654C245.753 17.748 246.724 17.795 247.664 17.795C249.074 17.795 250.406 17.748 251.659 17.654C252.944 17.5287 254.119 17.3563 255.184 17.137V20.991C255.56 20.1763 256.046 19.4713 256.641 18.876C257.268 18.2807 257.973 17.8263 258.756 17.513C259.571 17.1683 260.448 16.996 261.388 16.996ZM278.774 16.996C281.531 16.996 283.693 17.8107 285.26 19.44C286.827 21.0693 287.61 23.7483 287.61 27.477H272.523L272.476 26.584H281.218C281.281 25.0487 281.218 23.6387 281.03 22.354C280.842 21.038 280.529 19.9883 280.09 19.205C279.683 18.4217 279.134 18.03 278.445 18.03C277.505 18.03 276.706 18.7037 276.048 20.051C275.39 21.3983 274.983 23.6857 274.826 26.913L275.014 27.242C274.951 27.5867 274.92 27.947 274.92 28.323C274.92 28.6677 274.92 29.0437 274.92 29.451C274.92 31.613 275.202 33.3363 275.766 34.621C276.361 35.9057 277.098 36.8143 277.975 37.347C278.852 37.8797 279.761 38.146 280.701 38.146C281.484 38.146 282.409 37.958 283.474 37.582C284.571 37.1747 285.62 36.219 286.623 34.715L287.422 34.997C287.077 36.219 286.482 37.4253 285.636 38.616C284.821 39.7753 283.772 40.7467 282.487 41.53C281.202 42.282 279.651 42.658 277.834 42.658C275.766 42.658 273.917 42.235 272.288 41.389C270.659 40.5117 269.358 39.1487 268.387 37.3C267.447 35.42 266.977 32.976 266.977 29.968C266.977 26.9913 267.494 24.5473 268.528 22.636C269.562 20.7247 270.972 19.3147 272.758 18.406C274.544 17.466 276.549 16.996 278.774 16.996ZM312.905 17.654V18.641C312.309 18.829 311.73 19.2207 311.166 19.816C310.633 20.4113 310.116 21.4453 309.615 22.918L303.364 40.966L301.296 45.337L290.533 21.273C290 20.0823 289.483 19.346 288.982 19.064C288.48 18.782 288.057 18.641 287.713 18.641V17.654C288.872 17.748 290.063 17.8263 291.285 17.889C292.507 17.9203 293.666 17.936 294.763 17.936C296.141 17.936 297.363 17.9047 298.429 17.842C299.494 17.7793 300.497 17.7167 301.437 17.654V18.641C300.841 18.641 300.277 18.6723 299.745 18.735C299.212 18.7977 298.836 18.9857 298.617 19.299C298.429 19.581 298.491 20.098 298.805 20.85L304.774 35.138L304.304 35.467L307.171 27.148C308.142 24.2967 308.299 22.1973 307.641 20.85C307.014 19.4713 305.98 18.735 304.539 18.641V17.654C305.228 17.7167 306.043 17.7637 306.983 17.795C307.923 17.8263 308.69 17.842 309.286 17.842C309.881 17.842 310.539 17.8263 311.26 17.795C311.98 17.7637 312.529 17.7167 312.905 17.654ZM303.364 40.966L301.484 46.324C300.92 47.922 300.23 49.05 299.416 49.708C298.977 50.0527 298.413 50.319 297.724 50.507C297.066 50.7263 296.22 50.836 295.186 50.836C294.371 50.836 293.509 50.695 292.601 50.413C291.723 50.1623 290.971 49.7393 290.345 49.144C289.749 48.5487 289.452 47.7497 289.452 46.747C289.452 45.713 289.828 44.8827 290.58 44.256C291.332 43.6607 292.35 43.363 293.635 43.363C294.794 43.363 295.718 43.6293 296.408 44.162C297.128 44.6947 297.489 45.4937 297.489 46.559C297.489 47.217 297.269 47.8593 296.831 48.486C296.392 49.1127 295.703 49.5827 294.763 49.896C294.982 49.9273 295.217 49.943 295.468 49.943C295.75 49.9743 295.969 49.99 296.126 49.99C297.097 49.99 297.959 49.6767 298.711 49.05C299.463 48.4547 300.058 47.5147 300.497 46.23L302.142 41.248L303.364 40.966Z"
              fill="currentColor"
            />
          </svg> */}
        </div>
      </nav>
      <header>
        <div className="meet">
          <p className="text-small accent2">Meet Megan</p>
          <h2>Your Kind of Piano Teacher</h2>
          <p>
            Hello, I’m Megan Canabrey, a piano teacher of more than 15 years.
            I’m here to guide you as you learn the piano as an adult or a child,
            whether you’re a beginner or simply need a new challenge.
          </p>
          <a href="#method" className="btn accent1-bg bkg1-link">
            My teaching method
          </a>
        </div>
        <div className="meet-img">
          <img src={girl} alt="Megan Canabrey" className="meet-img__teacher" />
          <a href="#connect" className="btn btn-connect bkg2-bg text-link">
            <strong>
              Interested in learning?
              <span className="accent1-link">Let’s Connect!</span>
            </strong>
            <img width="20px" src={wave} alt="Emoji Wave" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;
