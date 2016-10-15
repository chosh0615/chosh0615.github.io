import { Injectable } from '@angular/core';
import { Construct } from	'../model/construct'
import { Property } from	'../model/property'

@Injectable()
export class PropertyService {
	
	getSources() : Construct[] {
		return [
				new Construct("Source", "com.sean.source.HdfsSource", "HDFS Source", []),
				new Construct("Source", "com.sean.source.FtpSource", "FTP Source", [])
				];
	}

	getWriters() : Construct[] {
		return [
				new Construct("Writer", "com.sean.writer.HdfsWriter", "Import Writer", [])
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
		else if(className == "com.sean.source.FtpSource")
			return [
				new Property("source.class", "com.sean.source.FtpSource", "", false),
				new Property("extract.namespace", "", "sample", true),
				new Property("extract.files.directory", "", "/path/", true)
				];
		else 
			return [
				new Property("writer.class", "com.sean.writer.HdfsSource", "", false),
				new Property("name", "", "sample", true)
				];
	}
}