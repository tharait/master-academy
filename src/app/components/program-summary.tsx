export const ProgramSummary = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-3">
        <div className="rounded shadow bordered">
          <h4 className="p-3 text-xl border-b">
            STEP 1 - Web Developer Foundation
          </h4>
          <div className="p-3">
            <div>දින 3යි. නොමිලේ!</div>
            <p>පෙබරවාරි 6,7,9 යන දින වල රාත්‍රී 7 සිට 9 දක්වා පැවැත්වේ.</p>
          </div>
        </div>

        <div className="rounded shadow bordered">
          <h4 className="p-3 text-xl border-b">
            STEP 2 - Mastering Front End Web Technologies
          </h4>
          <div className="p-3">
            <div>මාස 6යි. රු.25,000/-</div>
            <p>
              පෙබරවාරි 13 වෙනි දින සිට සෑම අගහරුවාදා දිනකම රාත්‍රී 7 සිට 9 දක්වා
              පැවැත්වේ.
            </p>
          </div>
        </div>

        <div className="rounded shadow bordered">
          <h4 className="p-3 text-xl border-b">
            STEP 3: Mastering Back End Web Technologies
          </h4>
          <div className="p-3">
            <div>මාස 6යි. රු.25,000/-</div>
            <p>දෙවන අදියර ඉවරවීමෙන් පසුව ආරම්භක දිනය සහ වෙලාව තීරණය කරනු ඇත.</p>
          </div>
        </div>
      </div>
    </>
  );
};
