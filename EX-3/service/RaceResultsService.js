import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";
/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const json = JSON.stringify(this._raceResults, null, 10);
    fs.writeFileSync(filePath, json, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log("Save data into file sucessfully.");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
       const json = fs.readFileSync(filePath, "utf8", (err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });
    this._raceResults = JSON.parse(json);
    return true;
  } catch ( error) {
    console.log(error.message + 'file cannot be read.');
  }
  }
  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    // TODO
    const found = this._raceResults.find(
      (elment) => elment.id == participantId && elment.type == sport,
    );
    return found ? found.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // TODO
    let seconds = null;
    this._raceResults.forEach((player) => {
      if (player.id == participantId) {
        seconds = seconds + player.time._totalSeconds;
      }
    });
    return seconds ? new Duration(seconds) : new Duration();
  }
}
