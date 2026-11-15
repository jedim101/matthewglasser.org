"use client";
import React from "react";
import TitleReveal from "@/components/titleReveal";
import { PortfolioVideoSection } from "@/components/portfolio-section";
import Image from "next/image";

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
				I'm currently building a 5-axis robotic arm using stepper motors, encoders and an ESP32.
			</p>
			<div className="w-full max-w-7xl items-start justify-between space-y-12">
				<h2 className="text-center font-mono text-4xl font-bold uppercase text-white">First Prototype</h2>
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
								My first iteration used a MG996R servo and a AS5600 encoder on each joint. The servo was mounted on the
								base of the arm and the encoder was mounted on the joint. The encoder was used to measure the position
								of the joint and the servo was used to move the joint to the desired position. The problem that I faced
								with this design waa that the servos were not strong enough to lift the weight of the arm at full
								extension, especially at the shoulder joint. The servos also had a lot of backlash, which made the arm
								not very accurate.
							</p>
						</div>
					</div>
					<video
						src="/portfolio/arm/proto_1.mov"
						className="relative z-50 w-1/3 rounded-3xl border-2 border-gray-900"
						controls
						muted
						loop
					/>
				</div>
			</div>
		</main>
	);
}
