import { useThemeContext } from '../contexts/ThemeContext';
import './Company.css'

export default function Company() {
  // Define animation variants
  const companies=[
    {image:'company6.png',class:'item1'},
    {image:'company5.png',class:'item2'},
    {image:'company3.png',class:'item3'},
    {image:'company2.png',class:'item4'},
    {image:'company1.png',class:'item5'},
    {image:'company6.png',class:'item6'},
    {image:'company5.png',class:'item7'},
    {image:'company3.png',class:'item8'},
    {image:'company2.png',class:'item9'},
    {image:'company1.png',class:'item10'},
  ]
 

  return (
    <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold leading-8 dark:text-white text-gray-900">
        Trusted by the world’s most innovative teams
      </h2>
      <div className="wrapper">
        {companies.map((company,i)=>{
          return (
            <div className={`item ${company.class}`}>
            <img
                      alt="Transistor"
                      src={company.image}
                    
                      className={`col-span-2 ${company.image==='company4.png' ? 'h-40 -mt-5' : 'h-32' }  w-full object-contain lg:col-span-1`}
                    />
            </div>
          )
        })}

 
</div>
    </div>
  </div>
     
  );
  
}
