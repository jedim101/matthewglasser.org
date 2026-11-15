import TitleReveal from "@/components/titleReveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "5-Axis Robotic Arm | Matthew Glasser",
};

export default function Arm() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-12 bg-gray-900 px-16 py-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="5-Axis Robotic Arm" />
			<div className="relative h-[50vh] w-full max-w-5xl ">
				<div className="absolute left-0 top-0 aspect-[16/9] h-3/4 w-auto -rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900">
					<Image
						src="/portfolio/arm/servo.png"
						className="h-full w-full object-cover"
						alt="5-Axis Robotic Arm"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="absolute bottom-0 right-0 aspect-[9/16] h-[95%] rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900">
					<Image
						src="/portfolio/arm/upper_arm.png"
						className="h-full w-full object-cover"
						alt="5-Axis Robotic Arm"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
			<p className="text-white">
				I&apos;m currently building a 5-axis robotic arm using stepper motors, servos, encoders and an ESP32.
			</p>

			<div className="w-full max-w-7xl items-start justify-between space-y-12">
				<h2 className="text-center font-mono text-4xl font-bold uppercase text-white">Current Design</h2>
				<div className="flex items-start justify-between">
					<div className="flex w-1/2 items-start justify-between">
						<div className="relative aspect-[9/16] w-2/5 rotate-2 overflow-hidden rounded-3xl border-2 border-gray-900">
							<Image
								src="/portfolio/arm/upper_arm.png"
								className="h-full w-full object-cover"
								alt="Current Design"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="relative z-50 aspect-square w-3/5 -rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900 bg-green-900">
							<Image
								src="/portfolio/arm/upper_arm_explode1.png"
								alt="Upper Arm Exploded View"
								className="h-full w-full object-cover"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
					<div className="w-1/2 pl-16 pt-10">
						<p>
							The current design uses stepper motors in a 3D printed housing to control the joints. I&apos;m currently
							in the process of designing and testing this iteration. The images show the upper arm (which will be
							attached to the shoulder at the bottom and the elbow at the top). The elbow is powered by a NEMA 17
							stepper motor with a 16:1 reduction via 2 GT2 timing belts. The motor is placed as close to the shoulder
							as possible to minimize the load on the shoulder joint. I determined that a 16:1 reduction would be
							correct based on the torque of the motor and my expected load of 1kg with 300mm arm segments.
						</p>
					</div>
				</div>
			</div>

			<div className="w-full max-w-7xl items-start justify-between space-y-12">
				<h2 className="text-center font-mono text-4xl font-bold uppercase text-white">First Iteration</h2>
				<div className="flex items-start justify-between">
					<div className="w-2/3">
						<div className="flex w-full">
							<div className="relative z-50 aspect-[5/3] w-1/2 rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900">
								<Image
									src="/portfolio/arm/servo_explode1.png"
									alt="First Prototype"
									className="h-full w-full object-cover"
									width={1000}
									height={1000}
								/>
							</div>
							<div className="z-10 aspect-[5/3] w-1/2 -rotate-3 scale-110 overflow-hidden rounded-3xl border-2 border-gray-900">
								<Image
									src="/portfolio/arm/servo.png"
									alt="First Prototype"
									className="h-full w-full -translate-y-2 scale-[115%] object-cover"
									width={1000}
									height={1000}
								/>
							</div>
						</div>
						<div className="w-full pl-0 pr-16 pt-20">
							<p>
								My first iteration used a MG996R servo and a AS5600 encoder on each joint. The encoder was used to
								measure the position of the joint and the servo was used to move the joint to the desired position. The
								problem that I faced with this design was that the servos were not strong enough to lift the weight of
								the arm at full extension, especially at the shoulder joint. The servos also had a lot of backlash,
								which made the arm not very accurate.
							</p>
						</div>
					</div>
					<video
						src="/portfolio/arm/proto_1.mov"
						className="relative z-50 w-1/3 rounded-3xl border-2 border-gray-900"
						controls
						muted
						loop
						playsInline
					/>
				</div>
			</div>
		</main>
	);
}
