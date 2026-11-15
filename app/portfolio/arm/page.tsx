import TitleReveal from "@/components/titleReveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "5-Axis Robotic Arm | Matthew Glasser",
	description: "My portfolio page for my 5-axis robotic arm project.",
};

export default function Arm() {
	return (
		<main className="flex min-h-screen w-screen flex-col items-center space-y-24 bg-gray-900 px-16 py-24">
			<TitleReveal className="h-16 text-6xl font-semibold text-white" text="5-Axis Robotic Arm" />
			<div className="w-full max-w-5xl space-y-12">
				<div className="relative h-[50vh] w-full">
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
				<p className="text-center text-white">
					I&apos;m currently building a 5-axis robotic arm using stepper motors, servos, encoders and an ESP32.
				</p>
			</div>

			<div className="w-full max-w-7xl items-start justify-between space-y-12">
				<h2 className="text-center font-mono text-4xl font-bold uppercase text-white">Current Design</h2>
				<div className="flex items-start justify-between">
					<div className="relative flex w-3/5 items-start">
						<div className="relative aspect-[9/16] w-1/3 rotate-2 overflow-hidden rounded-3xl border-2 border-gray-900">
							<Image
								src="/portfolio/arm/upper_arm.png"
								className="h-full w-full object-cover"
								alt="Current Design"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="relative z-50 aspect-square w-1/2 -rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900">
							<Image
								src="/portfolio/arm/upper_arm_explode1.png"
								alt="Upper Arm Exploded View"
								className="h-full w-full object-cover"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="absolute bottom-0 right-0 z-50 aspect-[3/4] w-1/4 rotate-3 overflow-hidden rounded-3xl border-2 border-gray-900">
							<div className="h-full w-[200%] -translate-x-1/3">
								<Image
									src="/portfolio/arm/upper_arm_annotated.png"
									alt="Upper Arm Annotated View"
									className="h-full object-cover"
									width={1816}
									height={1128}
								/>
							</div>
						</div>
					</div>
					<div className="w-1/2 pl-16 pt-10">
						<p>
							The current design uses stepper motors in a 3D printed housing to control the joints. I&apos;m currently
							in the process of designing and testing this iteration. The elbow is powered by a NEMA 17 stepper motor
							with a 16:1 reduction via 2 4:1 timing belts. The motor is placed as close to the shoulder as possible to
							minimize the load on the shoulder joint. I determined that a 16:1 reduction would be correct based on the
							torque of the motor and my expected load of 1kg plus the weight of the arm with 300mm arm segments. My
							next step is to test the upper arm & elbow, and then design the shoulder, forearm, and wrist.
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
