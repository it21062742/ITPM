import React, { useEffect } from 'react';

function LoanComparison() {
  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    document.getElementById("currentDate").textContent = formattedDate;
  }, []);

  return (
    <div className="main-body">
      <div className="row-fluid" style={{ textAlign: 'center', paddingBottom: '20px', paddingLeft: '0px' }}>
        <style>
          {`
          .ideabeam-top-responsive { width: 320px; height: 100px; }
          @media(min-width: 480px) { .ideabeam-top-responsive { width: 468px; height: 60px; } }
          @media(min-width: 730px) { .ideabeam-top-responsive { width: 728px; height: 90px; } }
          @media(min-width: 1500px) { .ideabeam-top-responsive { width: 970px; height: 90px; } }
          `}
        </style>

        <script>
          {`
          window.onload = function() {
            var date = new Date();
            var day = date.getDate();
            var month = date.toLocaleString('default', { month: 'long' });
            var year = date.getFullYear();
            
            var formattedDate = day + " " + month + " " + year;
            
            document.getElementById("currentDate").textContent = formattedDate;
          };
          `}
        </script>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span style={{ float: 'right', marginTop: '-21px', fontSize: '11px' }}>
            Last Updated on :
            <p style={{ fontSize: '15px' }} id="currentDate"></p>
          </span>
          <h2 className="undlne">Compare Housing Loan Interest Rates in Sri Lanka</h2>
          <div></div>
          <table className="table table-striped table-bordered" data-ref="housing-loans" id="loan-data">
            <thead>
              <tr>
                <th>Institution Name</th>
                <th>Product Name</th>
                <th>Max Amount</th>
                <th>Minimum Rate</th>
                <th>Repayment</th>
                <th>Eligibility</th>
                <th>Order</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="field-housing-loans-1">
                  <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/amanabank.jpg" height="50" title="Amana Bank Vehicle Leasing Interest Rates" alt="Amana Bank" /><br />
                  Amana Bank
                </td>
                <td className="field-housing-loans-2">Amana Bank Home Finance</td>

                <td className="field-housing-loans-3">Minimum 500,000/- or maximum up to 70% or Property Value</td>

                <td className="field-housing-loans-3"></td>

                <td className="field-housing-loans-3">15 Years</td>

                <td className="field-housing-loans-3">Salaried Employees <br /> Self Employed <br /> Srilankans Employed Abroad <br /></td>

                <td className="field-housing-loans-3">110</td>
                <td className="field-housing-loans-3">
                  <a href="http://www.amanabank.lk/en/services/personal-banking/home-finance" target="_blank" className="btn btn-success">Vist</a>
                </td>
              </tr>
              {/* copy from here */}
              <tr>
              <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/boc.jpg" height="50" title="BOC Vehicle Leasing Interest Rates" alt="BOC"/><br/>
                                                                                BOC
                                                                    </td>
                                                                    <td class="field-housing-loans-2">BOC Housing Loan Scheme</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">Depend on the repayment capacity of the customer</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">20%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">25 years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">BOC Customers, Sri Lankan citizens of age between 18-60 with an adequate repayment capacity with clear DRU and CRIB Records  Limited liability Companies (House Constructors for sale)</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">100</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://boc.lk/index.php?route=rates/rates" target="_blank" class="btn btn-success">Vist</a></td>
                                                                
              </tr>
              {/* copy until here */}
              <tr>
                                                                                                    
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/Cargills.jpg" height="50" title="Cargills Bank Vehicle Leasing Interest Rates" alt="Cargills Bank"/><br/>
                                                                                Cargills Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Cargills Bank Home Loans</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">Purchase of a house for residential purposes up to 75% of the FSV Construction of a house on owned property up to 80% of the Bill of Quantity (BOQ) Purchase of a bare land up to 40% of the FSV Renovate, modify or extend an existing house up to 75% of the BOQ</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">23%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Minimum of 5 Years. Maximum of 20 Years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Age 21 – 55 <br/> Confirmed employees in an established company/ Institution <br/> Minimum Gross Salary of Rs.30,000/=</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">10</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.cargillsbank.com/rates-and-charges/lending-rates/" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/commbank.jpg" height="50" title="Commercial Bank Vehicle Leasing Interest Rates" alt="Commercial Bank"/><br/>
                                                                                Commercial Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Commercial Home Loan</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">Depending on your need and income, you could borrow from Rs 500,000/- up to Rs 50.0 million.<br/> Even if your requirement is in excess of Rs 50.0 million, you can still negotiate with your branch manager for a higher amount.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">23%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Depending on your age you could agree for a repayment period of up to 20 years.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">You should have a regular monthly income,(minimum Rs 25,000) individually or jointly with your spouse. This income should be sufficient to meet the monthly loan commitment as well as living and other expenses.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">30</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.combank.lk/rates-tariff#lending-rates" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/dfcc.jpg" height="50" title="DFCC Vardhana Bank Vehicle Leasing Interest Rates" alt="DFCC Vardhana Bank"/><br/>
                                                                                DFCC Vardhana Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Sandella Housing Loan</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">The maximum loan amount is determined considering the repayment capacity and the Forced Sale Value (FSV) of the property as stipulated by the Bank.  In case of construction of a House, the bank allows a maximum borrowing up-to 75% of the value of the Bill of Quantity (BOQ)</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">15%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Minimum 5 Years  Maximum 20 Years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">To be eligible for a Home Loan an individual should earn a regular monthly income of LKR 30,000 or above and the income should be sufficient to meet the monthly loan commitment as well as other commitments and living expenses.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">20</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.dfcc.lk/interest-rates/lending-rates/" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/hnb.jpg" height="50" title="Hatton National Bank Vehicle Leasing Interest Rates" alt="Hatton National Bank"/><br/>
                                                                                Hatton National Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Shanthi Home Loans</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3"></td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">24%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">25 Years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Those with a regular monthly income, individually or jointly with spouse Public and private sector employees, professionals, businessmen or businesswomen Sri Lankans employed abroad</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">80</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://hnb.net/hnb-home-loan" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/hdfc-bank.jpg" height="50" title="HDFC Bank Vehicle Leasing Interest Rates" alt="HDFC Bank"/><br/>
                                                                                HDFC Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Kedella</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">From Rs. 50,000/- upwards (Maximum repayment period varies according to age)  Purchase of house: 70% of the forced sale value  Construction loans: 80 % of the forced sale value of property and BOQ  Purchase of Building Blocks 70% within Municipality limits and 60% Pradeshiya Sabha limits</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">26%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">30 Years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Salaried employees <br/> Business/self Employed <br/> Income earners from Agriculture <br/> Rental Income earners <br/> Others who can provide details of a constant income from authorized personnel. <br/> You can apply for the loan either individually or jointly (with your spouse, with parents or with your children)</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">70</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://hdfc.lk/pages/interest_rates/housing_loans.jsp" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/nsb.jpg" height="50" title="NSB Vehicle Leasing Interest Rates" alt="NSB"/><br/>
                                                                                NSB
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Ge-Dora</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">Depend on Repayment capacity Age Value of the Collateral Purpose</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">28%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">30 years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Who is Permanently Employed. <br/> Who is Self Employed. <br/> Who is an Expat Employee. <br/> Who is a Tax Payer</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">90</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.nsb.lk/lending-rates/" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/peoples-bank.jpg" height="50" title="People&#39;s Bank Vehicle Leasing Interest Rates" alt="People&#39;s Bank"/><br/>
                                                                                People&#39;s Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Jaya Niwasa</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">No upper Limit on Maximum Loan amount, up to 75% of - BOQ in constructing a house -Value in Purchasing of a land for residential purpose / purchasing of a house</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">30%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Up to 05 years on personal guarantee Up to a maximum period of 20 years on property mortgage</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Salary Earners /Businessmen &amp; Business Women with a steady monthly income.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">50</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.peoplesbank.lk/everyday-loans/" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/sampathbank.jpg" height="50" title="Sampath Bank Vehicle Leasing Interest Rates" alt="Sampath Bank"/><br/>
                                                                                Sampath Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Sampath Sevana</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">The maximum loan amount is determined considering the repayment capacity &amp; the Forced Sale Value (FSV) of the property as stipulated by the Bank.<br/> To purchase a house or to purchase a land and construct a house, you can borrow up to 70% of the total cost of the housing project.<br/> To extend or renovate your house, you can borrow up to 75% of the bill of quantity(BOQ) value</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">26%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Maximum period of 25 years or until the borrower reaches the age of 60</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Sri Lankan citizens Who have a regular Net Individual Monthly Income exceeding Rs. 60,000/-</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">60</td>
                                                                                                <td class="field-housing-loans-3"><a href="https://www.sampath.lk/common/loan/interest-rates-loan-and-advances.pdf" target="_blank" class="btn btn-success">Vist</a></td>
                                                                                                                                             
                                                
                                                                </tr>
                                                                                                    <tr>
                                                                    <td class="field-housing-loans-1">
                                                                    <img src="https://www.ideabeam.com/finance_assets/assets/uploads/logos/seylanbank.jpg" height="50" title="Seylan Bank Vehicle Leasing Interest Rates" alt="Seylan Bank"/><br/>
                                                                                Seylan Bank
                                                                    </td>
                                                                    <td class="field-housing-loans-2">Seylan Sirinivasa</td>
                                                                                                                      
                                                                            <td class="field-housing-loans-3">From a minimum of Rs.500,000/= based on the applicant’s repayment capacity and value of property. Maximum loan amount Rs.100 Million.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">26.50%</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">5 Year  Maximum 10 years</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">Salaried Employees, Professionals, Business Men, Sri Lankans employed Abroad, Joint borrowers with spouse, Parents with Son and Daughter over 18 years of age.</td>
                                                                                                  
                                                                            <td class="field-housing-loans-3">40</td>
                                                                                                 <td class="field-housing-loans-3"><a href="https://www.seylan.lk/housing-loan/home-loan" target="_blank" class="btn btn-success">Vist</a></td>            
                                                                </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>
            <strong>Disclaimer:</strong> Please note that the interest rates given here are based on the market research.
            To enable the comparisons certain set of data has been reorganized / restructured / tabulated.
            Users are advised to recheck the same with the individual companies / organizations.
            Ideabeam.com does not take any responsibility for any sudden / uninformed changes in interest rates.
            <br />
            Banks/ Financial Institutions can contact us at <a href="mailto:Supportc@HelpMe.com">Support@HelpMe.com</a> for inclusions or updates.
          </p>
        </div>
      </div>
      <div className="row-fluid" style={{ textAlign: 'center', paddingTop: '20px', paddingLeft: '0px' }}>
      </div>
    </div>
  );
}

export default LoanComparison;
