import { useThemeContext } from '../contexts/ThemeContext';
import './Company.css'

export default function Company() {
  // Define animation variants
  
  const { isDarkMode } = useThemeContext();
 

  return (
    <div className=" py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 dark:text-white text-gray-900">
        Trusted by the world’s most innovative teams
      </h2>
      <div class="wrapper">
  <div class="item item1">
  <img
            alt="Transistor"
            src={isDarkMode ? 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg':'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item2">
  <img
            alt="Reform"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg": "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item3">
  <img
            alt="Tuple"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg":"https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item4">
  <img
            alt="SavvyCal"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg":"https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
  </div>
  <div className='item item5'>
  <img
            alt="Statamic"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg":"https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
  </div>
  <div class="item item6">
  <img
            alt="Transistor"
            src={isDarkMode ? 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg':'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item7">
  <img
            alt="Reform"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg": "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item8">
  <img
            alt="Tuple"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg":"https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
  </div>
  <div class="item item9">
  <img
            alt="SavvyCal"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg":"https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
  </div>
  <div className='item item10'>
  <img
            alt="Statamic"
            src={isDarkMode? "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg":"https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
  </div>
</div>
    </div>
  </div>
     
  );
  
}
