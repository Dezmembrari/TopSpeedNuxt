<template>
    <div class="steps-container">
      <h2 class=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 sm:p-3 md:p-5">Așa gestionăm fiecare etapă pentru tine:</h2>
  
      <div class="steps">
        <div class="pas" id="pas1">
          <div class="content">
            <div class="number  bg-primary-600">
              <div class="text-wrapper ">1</div>
            </div>
            <div class="headline-and-details">
              <h3 class="mb-1 text-2xl font-medium leading-tight">Contactați-ne</h3>
              <p class="mb-2 text-base p text-gray">
                Ne contactati telefonic sau prin email imediat ce ați fost implicat într-un accident sau ați întâmpinat o problemă cu masina dumneavoastra.
              </p>
            </div>
          </div>
        </div>
  
        <div class="pas" id="pas2">
          <div class="content">
            <div class="number  bg-primary-600">
              <div class="text-wrapper">2</div>
            </div>
            <div class="headline-and-details">
              <h3 class="mb-1 text-2xl font-medium leading-tight">Mașina la schimb și transport</h3>
              <p class="mb-2 text-base p text-gray">
                In cazul in care masina dumneavoastra nu este deplasabila, putem organiza transportul acesteia catre service-ul nostru cu ajutorul platformei. Pe toata perioada reparatiei oferim masina la schimb.
              </p>
            </div>
          </div>
        </div>
  
        <div class="pas" id="pas3">
          <div class="content">
            <div class="number  bg-primary-600">
              <div class="text-wrapper">3</div>
            </div>
            <div class="headline-and-details">
              <h3 class="mb-1 text-2xl font-medium leading-tight">Constatare daune și întocmire amiabilă</h3>
              <p class=" mb-2 text-base p text-gray">
                La centrul nostru se va efectua constatarea daunelor si, daca este necesar, va asistam in intocmirea amiabilei. Fiind un centru autorizat, ne ocupăm de toate formalitățile și documentele necesare.
              </p>
            </div>
          </div>
        </div>
  
        <div class="pas" id="pas4">
          <div class="content">
            <div class="number  bg-primary-600">
              <div class="text-wrapper">4</div>
            </div>
            <div class="headline-and-details">
              <h3 class="mb-1 text-2xl font-medium leading-tight">Întocmirea și depunerea dosarului</h3>
              <p class="mb-2 text-base p text-gray">
                Echipa noastră se ocupă de întocmirea și depunerea dosarului către constatatorul de daune, gestionând totul în relație cu compania de asigurări pentru dumneavoastra.
              </p>
            </div>
          </div>
        </div>
  
        <div class="pas" id="pas5">
          <div class="content">
            <div class="number  bg-primary-600">
              <div class="text-wrapper ">5</div>
            </div>
            <div class="headline-and-details">
              <h3 class="mb-1 text-2xl font-medium leading-tight">Reparația</h3>
              <p class="mb-2 text-base p text-gray">
                După aprobarea dosarului, specialiștii noștri vor începe reparația mașinii dvs., folosind piese de calitate, originale și echipamente de ultimă generație, asigurându-ne că mașina este gata cât mai curând.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .steps-container {
    position: relative;
    padding: 20px;
    height: auto;
    background-color: var(--receptie-theme-3syslightsurface-container-lowest);
    min-width: 360px;
  
    .steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      width: 100%;
  
      @media (min-width: 1140px) {
        max-width: 1140px;
        margin: 0 auto;
      }
  
      .pas {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 12.84px;
        padding: 20.54px 30.8px;
        position: relative;
        background-color: #ffffff;
        border-radius: 15.4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
        max-width: 1200px;
  
        .content {
          display: inline-flex;
          align-items: center;
          gap: 20.54px;
          position: relative;
        }
  
        .number {
          color: white;
          position: relative;
          width: 41.07px;
          height: 41.07px;
        //   background-color: var(--receptie-theme-3syslighttertiary-container);
          border-radius: 50px;
          flex: none;
  
          .text-wrapper {
            
            position: relative;
            height: 29px;
            top: 3px;
            left: 14px;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            color: var(--receptie-theme-3white);
            font-size: 23.1px;
          }
        }
  
        .headline-and-details {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7.7px;
          position: relative;
          width: 90%;
        }
      }
  
      @media (min-width: 720px) {
        .pas {
          width: 90%;
        }
      }
  
      @media (min-width: 1024px) {
        .pas {
          width: 60%;
        }
      }
  
      #pas2,
      #pas4 {
        align-self: flex-end;
      }
  
      #pas1,
      #pas3,
      #pas5 {
        align-self: flex-start;
      }
    }
  }
  </style>
  