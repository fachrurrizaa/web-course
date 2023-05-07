import Input from "@/components/form/input";

export default function page() {
  return (
    <div className="flex flex-col">
        <h1>Join & Get Our <br/>Pro Benefits</h1>
        <div className="flex">
            <div>

            </div>
            <div>
                <Input type={"text"} label={"Name"} placeholder={"Type your full name"}/>
                <Input type={"email"} label={"Email Address"} placeholder={"Type your email"}/>
                <Input type={"password"} label={"Password"} placeholder={"Type your password"}/>
            </div>
        </div>
    </div>
  )
}
