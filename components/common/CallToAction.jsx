import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>Become a Classified User</h2>
          <p>We work with the best people around</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href="/register" className="btn btn-thm2">
            Register Now
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
