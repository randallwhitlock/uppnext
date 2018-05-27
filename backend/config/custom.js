/**
 * custom configuration
 * These are settings that are application-specific.
 * More info on custom config can be found at
 * https://sailsjs.com/config/custom
 */

 module.exports.custom = {

  baseUrl: 'http://localhost:1337',
  passwordResetTokenTTL: 24*60*60*1000,
  emailProofTokenTTL: 24*60*60*1000,
  // TODO: rememberMeTokenMaxAge: 24*60*60*1000,
  
  /********************************************************
       #####                        #####                  
      #     # ###### #    # #####  #     # #####  # #####  
      #       #      ##   # #    # #       #    # # #    # 
       #####  #####  # #  # #    # #  #### #    # # #    # 
            # #      #  # # #    # #     # #####  # #    # 
      #     # #      #   ## #    # #     # #   #  # #    # 
       #####  ###### #    # #####   #####  #    # # ##### 
   *********************************************************
  */
  sendgridDomain: '',
  sendgridSecret: '',
  // Sender used for outgoing autoemails 
  fromEmail: 'noreply@upnextapp.com',
  fromName: 'The UpNext Team',
  // Email address for user support & other correspondence
  internalEmailAddress: 'randall.whitlock@live.com',
  // require users to verify email
  verifyEmailAddresses: true,

/**********************************************************
  .oOOOo.                             
  o     o              o              
  O.        O                         
   `OOoo.  oOo                        
        `O  o   `OoOo. O  .oOo. .oOo. 
         o  O    o     o  O   o OooO' 
  O.    .O  o    O     O  o   O O     
   `oooO'   `oO  o     o' oOoO' `OoO' 
************************* O ***********************************           
                          o'          
*/
stripePublishableKey: 'pk_test_YwwFFUpskxZbjMNL5k12llgi',
stripeSecret: 'sk_test_99G2nExhaGlqmIPbunQMl1h8',


}