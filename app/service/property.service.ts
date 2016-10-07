import { Injectable } from '@angular/core';
import { Construct } from	'../model/construct'
import { Property } from	'../model/property'

@Injectable()
export class PropertyService {
	
	getSources() : Construct[] {
		return [
				new Construct("com.sean.source.HdfsSource", "HDFS Source", []),
				new Construct("com.sean.source.FtpSource", "FTP Source", [])
				];
	}

	getProperties(className: string) : Property[] {
		console.log("Getting properties for " + className);

		if(className == "") 
			return [];
		else if(className == "com.sean.source.HdfsSource" )
			return [
				new Property("source.class", "com.sean.source.HdfsSource", "", false),
				new Property("extract.namespace", "", "sample", true),
				new Property("source.fs.uri", "", "hdfs://", true)
				];
		else
			return [
				new Property("source.class", "com.sean.source.FtpSource", "", false),
				new Property("extract.namespace", "", "sample", true),
				new Property("extract.files.directory", "", "/path/", true)
				];
	}
}