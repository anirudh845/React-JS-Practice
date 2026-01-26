import React from 'react'
import Card from './components/Card';

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
    brandName: "Google",
    date: "3 days ago",
    jobPost: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salaryPerHour: "$85/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png",
    brandName: "Apple",
    date: "1 week ago",
    jobPost: "iOS Application Developer",
    tag1: "Full Time",
    tag2: "Mid-Level",
    salaryPerHour: "$75/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    brandName: "Microsoft",
    date: "5 days ago",
    jobPost: "Cloud Solutions Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salaryPerHour: "$80/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://icon2.cleanpng.com/20180803/ubx/5ba055fe0b3b79a8f55892cc8186c6b6.webp",
    brandName: "Amazon",
    date: "2 days ago",
    jobPost: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior",
    salaryPerHour: "$60/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    brandName: "Meta",
    date: "6 days ago",
    jobPost: "Frontend React Engineer",
    tag1: "Full Time",
    tag2: "Mid-Level",
    salaryPerHour: "$78/hr",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    brandName: "Netflix",
    date: "4 days ago",
    jobPost: "Platform Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salaryPerHour: "$95/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZJkzWaOKawF1LnbqqRHdzfZ9U2wk93ZLgA&s",
    brandName: "Tesla",
    date: "1 day ago",
    jobPost: "Autopilot Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salaryPerHour: "$90/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/NVDA-220e1e03.png?t=1722952498",
    brandName: "NVIDIA",
    date: "1 week ago",
    jobPost: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salaryPerHour: "$88/hr",
    location: "Taipei, Taiwan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV6AkPJpDXv-1j7NOmQPxKhp3rRN6wgrdpA&s",
    brandName: "Uber",
    date: "3 days ago",
    jobPost: "Distributed Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid-Level",
    salaryPerHour: "$82/hr",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
    brandName: "Airbnb",
    date: "2 weeks ago",
    jobPost: "Product Software Engineer",
    tag1: "Part Time",
    tag2: "Junior",
    salaryPerHour: "$55/hr",
    location: "Vancouver, Canada"
  }
];


const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card company={elem.brandName} post={elem.jobPost} jobDate={elem.date} type = {elem.tag1} level = {elem.tag2} salary = {elem.salaryPerHour} jobLoc = {elem.location} logo = {elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App
