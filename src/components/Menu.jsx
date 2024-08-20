import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <section className="w-72 bg-bg-secondary flex flex-col">
      {/* Profile block */}
      <div className="px-8 pt-6 bg-bg h-28 flex space-x-2">
        <Link to="/projects">
          <img
            className="rounded-full border-2 border-text size-14"
            src="./avatar.png"
            alt="Avatar image"
          />
        </Link>
        <div className="flex flex-col">
          <Link to="/projects" className="font-bold text-base">
            Кот Себастьян
          </Link>
          <span className="text-text/50">Авитолог</span>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className="flex flex-col py-5 px-4">
        <NavLink to="/inbox" className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="27"
            height="27"
            fill="none"
            viewBox="0 0 27 27"
            className="fill-current text-current"
          >
            <path fill="url(#pattern0_0_371)" d="M0 0H27V27H0z"></path>
            <defs>
              <pattern
                id="pattern0_0_371"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <use transform="scale(.01)" xlinkHref="#image0_0_371"></use>
              </pattern>
              <image
                id="image0_0_371"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuklEQVR4nO2dS6hNYRTHj2dEnuURSZSBSJFQIuVdyGNyPQpl4jUwUCIxJRNlRskjSUYSM2Viggkmd4CugTyibmHg8tPqbDpu997z7XvWvt9+/H+1h+fs1ffb+9t7fXvttWs1IYQQQgghhBBCiH8Ao4AjwEVgHzBMwxMJYCbQzv88BAZLShwZb+mZrRKSHxnGKQnJjwxju4TkR8YjYKiENB/MxUAbMKcFGW+ayHgCjJGMvgdyKHC3YdB+A+eAQZIRAeBQL0fzpRApnmcGMBJYCqwu0LYSmOIp5E4fA9mnFGcZ64HPFJMu4LyXEBt00kpxljER6KT47PQQMhf4lkaK9wUc2EE5uNWykIbp4keIlCzupqjvvwxcdhGSQsrVLG5tgeE9rHkVjZ/AMjchKaRkkmdQP/PuAd8p3gX9BbDZVUbDwKztp5SnwPhMgqo6/ZAiGTmSIhk5kiIZOZIiGbEAVgEdDTJua9U2MlacACwApseORQghhBBCiJwBDAE2Accsn4kdT6UBJgCPu2X4V2LHVWUZz3tZA1sTO75K0USGcTJ2jJUhQIaxJ3aclSBQxgsriIsda+6x6jt7SA+MzVBGOzDNP/oSkZT2XEge1pPUaB1M+R+S4QWwq5ej+XgKGc+8zgzqZ+qsAm0zrIypZRENA2APm+iPFE8ZwCLgJcXkK3DYS8iVJjs7PgAyRgPvKT4bPIQsS6rugqVkME1toRxcb1lIMiD2/vivECneMgyr+qMcXKt5AewPkHLWW0ZDc4EyTFnra54ESskkzwAWJkljEfmSNlUYCCkuSR8wuYC3vdm2Cwm8prjLED5SJCNHUiQjR1IkI/J6V2e3N6V0zYgJMClJ4JZb4ULUYIQQQgghhMgfwHxgGzA7diyVBhgB3GxIKH8Bp2PHVWUZ1jS5O7+ta1zs+CpFHzL+ciJ2jJUhQIZxIHaclSBQRgcwLnasuSdpIja1v43yA2V8AOb5R18ygKNJ9Z3xzl5BS/l7yfAC2NjDkWyF122Bv5cMT6zarpfppamURMYDj2mKeou/+y22GIyBjdMrq770EnKjyc7aBkDG8BI0wexyaYJpBcIBO2rLSkZgDNVqE2vLGaFSvGUY9j0RyoFPI+VkUM4ESNnrLaOhgLsMrcaDboQ8pZBVngGsAz5RTOxgPecqw0FKy0kf9elwSQ4+QZFmW2H1yH4GfKR8tGcemQZVdVJIkYwcSZGMHEmRjFjYA6VuL4a+1qptZExAsiq8294JjB2PEEIIIYQQQgghhBCilil/AFuvFjdt1MpxAAAAAElFTkSuQmCC"
              ></image>
            </defs>
          </svg>
          <span>InBox</span>
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="27"
            height="27"
            fill="none"
            viewBox="0 0 27 27"
          >
            <path fill="url(#pattern0_0_368)" d="M0 0H27V27H0z"></path>
            <defs>
              <pattern
                id="pattern0_0_368"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <use transform="scale(.01)" xlinkHref="#image0_0_368"></use>
              </pattern>
              <image
                id="image0_0_368"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO3dvWsUQQCG8VHQKNiIVfwPjJ0fjfgBNmLhxQgBrRRCFATTiU0Kbc50KUUFJZA0F8ReRLsgeNooKIrYqIVCUBFTSPLIwgYuIu7F3bt9d/b9wTSB3M7Ow11277hJCGZmZmZmZmZmZrYGsA1oABPAlYqMCeBEMvdocgI7gVvAEtW1BNwEBkOVAYeBL8TjM3AoVBGwB/hBfH4C+0OVAFuA98TrHTAQqiL9Yxi7S6EqgKfE70moAmArsEL8VpKX5qAuuTQE2jUZg2Wvt5mZmZmZmSRgB3ABmAcWBG7g2gWNhfSczifnGNQBG9NP2r4Rv6/AZWBDUARsBu5TP/eATUENcJv6uhGUAEfKXhEBR4MK4GHZqyHgQRC6ovpV9moISNZgu0KQg2WvhJADCkFGupjoVCQjy4hCkNGsWYZIkG207Dk6yFoO0k9kc5B+chAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBgHEeMgYhxEjIOIcRAxDiLGQcQ4iBiJIMBwxq5rs11MtKgd3hr/Mf9GgcfPMpvx+8NFBGmhtb/IxXXMfQxYRkcrtiCrUca7mPe44CY4UQYhXejm33bjSTdPawrGiDrIqg/ANHAuHdPpz1RFH6RqHESMg9QxyGIPv6j/rODL1uX0MXs130WFIPkP8u/jH0+/pJ/Xd+Bkj+faij5IAhgCnueIkTwrdoUeq02Qjm07zgBv1xHiDXC6X9tf1CrIqmRxgX3ANeAx8Drd0jwZr4BHwFVgb7/3IallEGUOIsZBxDhITYPMlHhj2K7YyLoxnCkiyPWMg1j3mkXdKVsxjhURZAD4VNCE6uxjsg1i7iAdH4daPmOFxOi4O57LOaE6my/8XYP0petu2WdWQXd6+g/EgFPAy7LPsgJe9Prt/j/D7AbOApMCO71NiYzJdE2G+hbCzMzMzMzMzMwslOM38i1x8A14KWYAAAAASUVORK5CYII="
              ></image>
            </defs>
          </svg>
          <span>Проекты</span>
        </NavLink>
      </nav>

      {/* Sign out button */}
      <button className="flex w-min space-x-2 items-center ml-12 mt-auto mb-7" type="button" onClick={""}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="31"
          height="31"
          fill="none"
          viewBox="0 0 31 31"
        >
          <path fill="url(#pattern0_0_377)" d="M0 0H30.333V30.333H0z"></path>
          <defs>
            <pattern
              id="pattern0_0_377"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.01)" xlinkHref="#image0_0_377"></use>
            </pattern>
            <image
              id="image0_0_377"
              width="100"
              height="100"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO3dS4hOYRjA8cdtxiXsEBsmlxJihrI2FqywUGIxJmKrGZONDAul5BILK6zcFjZqNDVJNKtRWJAduU0RcitD8dfJGWma9/u+xYfned7nV2c1m++d/5zbN+e8r0gIIYQQQgghhBBCCJkCxgIrgW1AB7BP6bYTWA9MF4+AWcBJYBBbvgK9wFrxABgDdAGfsa8XmC1WAROBS/jyAmgRo3vGBXx6C8wXS8rDlGcPiyOAGDqBf6oyoI/AANCncLsFPKkhSpdYUF5NpbwB2oAGUQ5YVgZKeQdMEQP3GYMVYiwUQ4BxwMUKUTaJZsCqCh++TQwCpgKvEmM6J5oBWyucM9QfplKAE4lx9YtmwN7EBx8Qw4D2xLgei2bAwcQHvymGAa2JcT0SzRwHaQSejjKu/aKZ1yAFYAlwrxzPEHAKGC+aeQ4yDJhh6S7dfRBTIogyEUSZCKKM5yBAA7AHuAacARaLds6DXB0xpi/ARtHMaxCgJTGub6qjOA6yOTEu3VEcB5kHfDcXxWuQAtBdIYjOKJ6DFIDDNUTR819E70HMRckhiKkouQQxEyWnICai5BZEfZQcg6iOkmsQtVHqGQSYVN4hNxnarqiKUo8g5eObx8pvUz36Bmz4uyXqGyT1sJ0nH4A5VoIMP2rj3W4rQe6Sh11WgnTi3/t/8gJpnYIU75gcjZO6vsve4i3euQouZZuyvuy1Cu83hpagMUauQdAaI8cgaI6RWxC0x8gpCBZi5BKE2mLoeBzIexAsxfAeBDhkKobnIMAC4IepGM6DbDEXw3mQ1eZieA5SAHpGjGlIdYxMXmnrKsOcB1aIdp6DmBRBlIkgykQQZXIIAswsnqoUCzwHAZYC9/+YE/40MEE0cz6B2bNRxnVANHMcpNXqFH8xCaahaWIbxSjSs3X3W55IebvYnUj5dWJMZ0Wz8jHQlxWWeVgkhvDrXZXLFf7IdH+5WGUW6OEo7RYOX8By4EaVsUwWIzdO1ZarKH5+R8HSFH2jbLcTc/SO1ClWZPBKwQMLe/lvseSRQuXrBN7WoXoONItV5Z7SUcM5xYKeYjkn8aA80R8vl52zZAi4DqwRj8o9prm8oy/2nCMKt25gB7AOmPa/f2chhBBCCCGEEEIIIYhBPwHpXaGhgDcgnwAAAABJRU5ErkJggg=="
            ></image>
          </defs>
        </svg>
        <span>Выйти</span>
      </button>
    </section>
  );
};

export default Menu;
